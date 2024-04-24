import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  let message = '';
  promise1
    .then((result) => {
      message = `${result.body} `;
      promise2
        .then((rst) => {
          message += `${rst.firstName} ${rst.lastName}`;
          console.log(message);
        })
        .catch(() => {});
    })
    .catch(() => { console.log(new Error('Signup system offline')); });
}
