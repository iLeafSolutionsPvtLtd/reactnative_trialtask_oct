import ApiConstants from '../ApiConstants';
import Api from '../index';
export default function loginUser(username, password) {
  return Api(
    ApiConstants.LOGIN,
    {Email: username, Password: password},
    'post',
    null,
  );
}
