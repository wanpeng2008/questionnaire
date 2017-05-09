// 用户信息
// export interface UserModel{
//   username:string; //问卷标题
//   createDate?:string; //创建日期
// }

export class UserModel{
  username:string; //问卷标题
  createDate?:string; //创建日期
  constructor(obj){
    this.username = obj.username;
    if(obj.createDate) this.createDate = obj.createDate;
  }
}
