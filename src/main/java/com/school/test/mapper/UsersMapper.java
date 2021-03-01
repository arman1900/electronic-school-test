package com.school.test.mapper;

import com.school.test.model.Users;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UsersMapper {

    @Select("select * from users")
    List<Users> findAll();

    @Insert("insert into users(Firstname,email,login,Secondname) values(#{Firstname},#{email},#{login},#{Secondname})")
    @SelectKey(statement = "SELECT LAST_INSERT_ID()", keyProperty = "id",
            before = false, resultType = Integer.class)
    void insert(Users users);

    @Delete("delete from users where id=#{id}")
    void delete(Long id);
}
