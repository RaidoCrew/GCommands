# guildOnly

```js
module.exports = {
	name: "NAME",
	description: "DESCRIPTION",
	guildOnly: "id guild",
	run: async(client, slash, message) => {
		if(message) {
			return message.inlineReply("hi", {
				allowedMentions: { parse: ["users"], repliedUser: true }
			})
		}
		client.api.interactions(slash.id, slash.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "hi",
					allowedMentions: { parse: ["users"], repliedUser: true }
				}
			}
		})
  }
};
```

Enter the guild id in the `guildOnly` parameter.