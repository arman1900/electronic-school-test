package com.school.test.resource;

import com.school.test.mapper.UsersMapper;
import com.school.test.model.Users;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UsersResource {

    private UsersMapper usersMapper;

    public UsersResource(UsersMapper usersMapper) {
        this.usersMapper =usersMapper;
    }
    @GetMapping("/all")
    public List<Users> getAll() {
        return usersMapper.findAll();

    }
    @PostMapping("/add")
    public List<Users> saveUser(@RequestBody Users users) {
        usersMapper.insert(users);
        return usersMapper.findAll();
    }
    @DeleteMapping("/delete/{id}")
    private List<Users> delete(@PathVariable Long id) {

        usersMapper.delete(id);
        return usersMapper.findAll();
    }
}
