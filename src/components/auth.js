import {useState, useContext, createContext} from 'react'


const AuthContext = createContext(null)

export const   AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)

const login = (user) => {
setUser(user)
}
const logout = () => {
setUser(null)
}
function subtractHours(date, hours) {
  date.setHours(date.getHours() - hours);

  return date;
}
function subtractMinutes(numOfMinutes, date = new Date()) {
  date.setMinutes(date.getMinutes() - numOfMinutes);

  return date;
}
const calculatetime = (newdat) => {

const minute = new Date(newdat);
const newdate1 = subtractMinutes(30, minute)
const date = new Date(newdate1);
const newDate = subtractHours(date, 5);
return newDate

}
return (
<AuthContext.Provider value={{ user, login, logout,calculatetime }}>
	{children}
</AuthContext.Provider>
)
}
export const useAuth = () => {
return useContext(AuthContext)
}