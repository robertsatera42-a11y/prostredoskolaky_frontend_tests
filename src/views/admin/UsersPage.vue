<template>
  <section class="main-section">
    <h2>Registrovaní uživatelé</h2>
    <p>Počet registrovaných: {{users.length}}</p>
    <message :type="messageType" :message="message"/>
    <div class="u-table">
      <div class="u-table-row">
        <div class="u-table-head">id</div>
        <div class="u-table-head">Jméno</div>
        <div class="u-table-head">Příjmení</div>
        <div class="u-table-head">E-mail</div>
        <div class="u-table-head">Datum registrace</div>
        <div class="u-table-head">Poslední login</div>
        <div class="u-table-head">Aktivní</div>
        <div class="u-table-head">Oprávnění</div>
      </div>
      <div v-for="(user, index) in users" :key="user.email" class="u-table-row">
        <div class="u-table-cell">{{index}}</div>
        <div class="u-table-cell">{{user.firstName}}</div>
        <div class="u-table-cell">{{user.lastName}}</div>
        <div class="u-table-cell">{{user.email}}</div>
        <div class="u-table-cell">{{transformDate(user.createdAt)}}</div>
        <div class="u-table-cell">{{transformDate(user.lastLogin)}}</div>
        <div class="u-table-cell" style="color:red">{{user.deleted ? 'smazáno' : ''}}</div>
        <div v-if="user.role !== 'admin' && actUser.role === 'admin'" class="u-table-cell">
          <button
            :class="buttonClass(user.role, 'user')"
            @click="changeRole(user.email, 'user', index, `${user.firstName} ${user.lastName}`)"
          >User</button>
          <button
            :class="buttonClass(user.role, 'manager')"
            @click="changeRole(user.email, 'manager', index, `${user.firstName} ${user.lastName}`)"
          >Manager</button>
          <button
            @click="changeRole(user.email, 'admin', index, `${user.firstName} ${user.lastName}`)"
            :class="buttonClass(user.role, 'admin')"
          >Admin</button>
        </div>
        <div class="u-table-cell" v-else>{{user.role}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import client from '../../client/client'
import { USER } from '../../types'
import { mapGetters } from 'vuex'
import transformerUtils from '../../utils/transformerUtils'
import Message from '../../components/common/Message'

export default {
  name: 'users-page',
  components: {
    Message
  },
  data () {
    return {
      users: [],
      message: '',
      messageType: ''
    }
  },
  async mounted () {
    this.users = await client.getUsers()
  },
  computed: {
    ...mapGetters({ actUser: USER })
  },
  methods: {
    async changeRole (email, role, index, userName) {
      try {
        const result = window.confirm(`Opravdu chcete u uživatele ${userName} změnit roli na ${role}?`)
        if (result) {
          await client.updateRole(email, role)
          this.users[index].role = role
          this.messageType = 'success'
          this.message =
            'Nová role byla nastavena. Počkejte chvíli než se změny projeví'
        }
      } catch (err) {
        this.messageType = 'error'
        this.message = 'Něco se nepovedlo.'
      }
    },
    buttonClass (userRole, buttonRole) {
      if (userRole === buttonRole) {
        return 'button active'
      }
      return 'button'
    },
    transformDate (stringDate) {
      return transformerUtils.transformDate(stringDate)
    }
  }
}
</script>

<style scoped lang="scss">
section.main-section {
  padding: 100px 0 60px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 25px;
    padding-bottom: 20px;
  }

  .u-table {
    display: table;
    width: 100%;
    padding-top: 30px;

    .u-table-row {
      display: table-row;
      height: 45px;
    }

    .u-table-head {
      display: table-cell;
      border-bottom: 2px solid #99999980;
      font-weight: 700;
    }

    .u-table-cell {
      display: table-cell;
      border-bottom: 1px solid #99999980;
      padding: 10px 0 5px 0;

      .button {
        margin-right: 5px;
        &.active {
          background: #f06027;
          color: white;
        }
      }
    }
  }
}
</style>
