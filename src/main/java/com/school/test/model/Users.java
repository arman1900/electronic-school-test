package com.school.test.model;

public class Users {

    private String Firstname;
    private String email;
    private String login;
    private Integer id;
    private String Secondname;
    public String getFirstname() {
        return Firstname;
    }

    public void setFirstname(String firstname) {
        Firstname = firstname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSecondname() {
        return Secondname;
    }

    public void setSecondname(String secondname) {
        Secondname = secondname;
    }
}
