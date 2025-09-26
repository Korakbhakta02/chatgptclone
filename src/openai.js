const { OpenAI }=require('openai')
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
