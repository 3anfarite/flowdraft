import axios from 'axios';

const sendEmail = async (userName, email, subject, message) => {
  return axios({
    method: 'post',
    url: '/api/send-mail',
    data: {
      userName: userName,
      email: email,
      subject: subject,
      message: message,
    },
  });
};

export default sendEmail;