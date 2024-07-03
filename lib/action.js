'use server'

export async function sendingEmail(formData) {
  const data = {
    name: formData.get('name'),
    surname: formData.get('surname'),
    email: formData.get('email'),
    tel: formData.get('tel'),
    message: formData.get('message'),
  }
  console.log(data)
}
