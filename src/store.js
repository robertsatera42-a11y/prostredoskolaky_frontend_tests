import Vue from "vue";
import Vuex from "vuex";
import client from "./client/client";
import { getField, updateField } from "vuex-map-fields";
import {
  EVENTS,
  SET_EVENTS,
  FETCH_EVENTS,
  TOTAL_PAGES,
  SET_TOTAL_PAGES,
  TOTAL_EVENTS,
  SET_TOTAL_EVENTS,
  SET_ACTUAL_PAGE,
  ACTUAL_PAGE,
  IS_LOGGED_IN,
  EMPTY_USER,
  UPDATE_USER,
  FETCH_USER,
  SET_USER,
  SET_USER_PROFILE,
  DELETE_USER,
  USER,
} from "./types";
import tracking from "./utils/tracking";
import transformerUtils from "./utils/transformerUtils";
import fb from "./firebase.js";

Vue.use(Vuex);

fb.auth.onAuthStateChanged(async (user) => {
  if (user) {
    const role = await fb.getRole();
    const hasRegistration = await client.hasRegistration();
    user.role = role;
    user.hasRegistration = hasRegistration;
    store.commit(SET_USER, user);
  } else {
    store.commit(EMPTY_USER);
  }
});

const store = new Vuex.Store({
  state: {
    user: {
      occupation: null,
      firstName: "",
      lastName: "",
      email: "",
      grade: null,
      dob: undefined,
      region: null,
      school: "",
      linkedin: "",
      interests: [],
      activities: [],
      knowledge: null,
      lastSaved: "",
      role: "",
      createdAt: "",
      lastLogin: "",
      sendNewsletter: false,
      schoolContact: "",
      hasRegistration: false,
    },
    events: [
      {
        eventName: "",
        description: "",
        eventUrl: "",
        categories: [],
        types: [],
        contact: "",
        deadlines: [],
        logo: "",
        ageGroup: [],
        isForeign: false,
        group: [],
      },
    ],
    totalPages: null,
    totalEvents: null,
    actualPage: null,
    search: "",
    checkedCategories: [],
    checkedTypes: [],
  },
  getters: {
    getField,
    [EVENTS]: (state) => state.events,
    [TOTAL_PAGES]: (state) => state.totalPages,
    [TOTAL_EVENTS]: (state) => state.totalEvents,
    [ACTUAL_PAGE]: (state) => state.actualPage,
    [USER]: (state) => state.user,
    [IS_LOGGED_IN]: (state) => state.user.email,
  },
  mutations: {
    updateField,

    // event
    [SET_EVENTS](state, events) {
      state.events = [...events];
    },
    [SET_TOTAL_PAGES](state, totalPages) {
      state.totalPages = totalPages;
    },
    [SET_TOTAL_EVENTS](state, totalEvents) {
      state.totalEvents = totalEvents;
    },
    [SET_ACTUAL_PAGE](state, page) {
      state.actualPage = page;
    },

    // user
    [SET_USER_PROFILE](state, user) {
      state.user.firstName = user.firstName;
      state.user.lastName = user.lastName;
      state.user.email = user.email;
      state.user.occupation = user.occupation;
      state.user.sendNewsletter = user.sendNewsletter;
    },
    [SET_USER](state, user) {
      state.user = {
        occupation: user.occupation || null,
        firstName:
          user && user.displayName
            ? user.displayName.split(" ")[0]
            : user.firstName,
        lastName:
          user && user.displayName
            ? user.displayName.split(" ")[1]
            : user.lastName,
        email: user.email || "",
        grade: user.grade || null,
        dob: user.dob ? new Date(user.dob) : new Date("Jan 1 2000"),
        region: user.region || null,
        school: user.school || "",
        linkedin: user.linkedinUrl || "",
        interests: user.interests ? user.interests : [],
        activities: user.activities ? user.activities : [],
        knowledge: user.knowledge || null,
        lastSaved: user.updatedAt ? new Date(user.updatedAt) : undefined,
        role: user.role || "",
        schoolContact: user.schoolContact || "",
        hasRegistration: user.hasRegistration || false,
      };
      if (user.sendNewsletter) {
        state.user = {
          ...state.user,
          sendNewsletter: user.sendNewsletter,
        };
      }
    },
    [UPDATE_USER](state, user) {
      state.user = {
        ...user,
      };
    },
    [EMPTY_USER](state) {
      state.user = {
        firstName: "",
        lastName: "",
        email: "",
      };
    },
  },
  actions: {
    // event
    [FETCH_EVENTS]: async ({ commit, state }, page) => {
      try {
        const { events, totalPages, totalEvents } = await client.getEvents(
          state.search,
          state.checkedCategories,
          state.checkedTypes,
          page
        );
        events.length
          ? tracking.track("database", "filter", "search_found")
          : tracking.track("database", "filter", "search_not_found");
        commit(SET_EVENTS, events);
        commit(SET_TOTAL_PAGES, totalPages);
        commit(SET_TOTAL_EVENTS, totalEvents);
        commit(SET_ACTUAL_PAGE, page);
      } catch (err) {
        console.log(err);
      }
    },

    // user
    [FETCH_USER]: async ({ commit }, content) => {
      try {
        const user = await client.getUser(content);
        if (content === "full") {
          user.interests = user.interests.map((interest) => {
            return transformerUtils.transformCategoriesBack(interest);
          });
        }
        content === "profile"
          ? commit(SET_USER_PROFILE, user)
          : commit(SET_USER, user);
      } catch (err) {
        console.log(err);
      }
    },

    [DELETE_USER]: async ({ commit, state }) => {
      try {
        await client.deleteUser();
        commit(EMPTY_USER);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default store;
