export default {
    users: state => state.users.filter(user => !user.isAdmin),
    admins: state => state.users.filter(user => user.isAdmin),
    usersByName: (state, getters) => (name) => {
        return getters.users.filter(user => user.name.match(name))
    }
}