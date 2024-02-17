const { Configuration, OpenAI }=require('openai')
// const configuration= new Configuration({})
const openai= new OpenAI({
    apiKey: "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", dangerouslyAllowBrowser: true
})

export async function sendmsgtoopenai(message){
    const res =  await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "user",
            "content": message
          }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
console.log(res)
    return res.choices[0].message.content;
}