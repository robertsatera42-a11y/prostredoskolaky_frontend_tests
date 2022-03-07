const Tracking = {
  track (category, action, label) {
    if (typeof ga === 'function') {
      ga('send', 'event', category, action, label)
    }
  }
}

export default Tracking
