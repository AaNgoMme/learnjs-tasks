function getAverageAge(users) {
    return arr.reduce( (item, user) => item + user.age, 0) / users.length;
}