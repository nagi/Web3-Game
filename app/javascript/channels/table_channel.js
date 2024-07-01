import consumer from "channels/consumer"

consumer.subscriptions.create("TableChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.debug('connected() callback fired')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.debug('disconnected() callback fired')
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.debug('Data received callback fired');
    console.debug(data);

    const goalEvent = new CustomEvent("Goal!", { detail: { score: data.score }});
    document.dispatchEvent(goalEvent);
  }
});
