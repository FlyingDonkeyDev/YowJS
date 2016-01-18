'use strict';

const PayloadBase = require('./payload_base'),
      MessageModel = require('../message/message_model');

class MessagePrivate extends PayloadBase {
    /**
     * Regex pattern for matching a private messages received
     * Matching pattern of example: [0987654321000@s.whatsapp.net(16-01-2016 00:59)]:[ABCDEF1234567890000]	 Hey You
     *
     * Structure:
     *   0987654321000: sent from
     *   s.whatsapp.net: private identifier
     *   16-01-2016 00:59: date
     *   ABCDEF1234567890000: msgid
     *   Hey You: text sent
     */
    getPattern() {
        return /^\[(\d+)@.*\((.*)\).*\]:\[(.*)\]\t (.*)/; //
    }


    /**
     *
     */
    initializeModel(model) {
        return new MessageModel(model);
    }
}

module.exports = MessagePrivate;