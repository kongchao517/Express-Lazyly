const userSql = {
	select: "select * from user where username = ? or password = ?",
	add: "INSERT INTO  user(username,password,age,sex) VALUES(?,?,?,?)",
	update: "UPDATE user set username = ? , password = ? ,age = ?,sex = ? where id = ?",
	delete: "DELETE FROM user where id =?"
};
module.exports = [userSql];
