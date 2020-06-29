// // node 提供的加密板块
// import * as crypto from 'crypto';

// /*
//   crypto.randomBytes(）方法生成 32 字节的随机数 - 这里作为盐值
// */
// export const makeSalt = () => crypto.randomBytes(3).toString('base64');

// /*
//   options （密码，盐值，迭代次数，密钥长度，摘要函数）
// */
// export const encryptPassword = ( password:string, salt) => {
//   if(!password || !salt) return;
//   const tempSalt = Buffer.from(salt, 'base64');
//   return crypto.pbkdf2Sync(password, tempSalt, 50, 16, 'sha1').toString('base64');
// }
import * as crypto from 'crypto';

/**
 * Make salt
 */
export function makeSalt(): string {
  return crypto.randomBytes(3).toString('base64');
}

/**
 * Encrypt password
 * @param password 密码
 * @param salt 密码盐
 */
export function encryptPassword(password: string, salt: string): string {
  if (!password || !salt) {
    return '';
  }
  const tempSalt = Buffer.from(salt, 'base64');
  return (
    // 10000 代表迭代次数 16代表长度
    crypto.pbkdf2Sync(password, tempSalt, 10000, 16, 'sha1').toString('base64')
  );
}