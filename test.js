const {
  song_detail,
  login_qr_key,
  login_qr_create,
  login_qr_check,
  song_url,
} = require('./dist')

async function test() {
  try {
    // const result1 = await login_qr_key({

    // })
    // console.log(result1.body.data.unikey)

    // const aKey = "b3d57d6a-1c03-4e79-ad05-976ffaaa3d29"

    // const result2 = await login_qr_create({
    //     key: aKey,
    //     qrimg: true
    // })
    // console.log(JSON.stringify(result2))

    // const result3 = await login_qr_check({
    //     key: aKey
    // })
    // console.log(JSON.stringify(result3))

    const resultn = await song_url({
      id: '405998841,33894312',
    })
    console.log(JSON.stringify(resultn))


  } catch (error) {
    console.log(error)
  }
}

test()
