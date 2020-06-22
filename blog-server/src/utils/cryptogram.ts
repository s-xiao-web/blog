// node 提供的加密板块
import * as crypto from 'crypto';

/*
  crypto.randomBytes(）方法生成 32 字节的随机数 - 这里作为盐值
*/
export const makeSalt = () => crypto.randomBytes(3).toString('base64');

/*
  options （密码，盐值，迭代次数，密钥长度，摘要函数）
*/
export const encryptPassword = ( password:string, salt) => {
  if(!password || !salt) return;
  const tempSalt = Buffer.from(salt, 'base64');
  return crypto.pbkdf2Sync(password, tempSalt, 50, 16, 'sha1').toString('base64');
}
