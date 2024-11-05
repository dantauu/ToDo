import React from "react"
import { Moon } from "../Moon/Moon"
import { SunIcon } from "../Sun/Sun"
import { useContext } from "react"
import { ThemeContext } from "../../Providers/ThemeProviders"


export const ThemeComponent = () => {
    const [theme, setTheme] = useContext(ThemeContext)	
		const changeTheme = () => {
			setTheme(theme === 'light' ? 'dark' : 'light')
		}
	return (
		<>
			<div onClick={changeTheme}>
				{theme === 'light' ? <SunIcon /> : <Moon />}
			</div>
		</>
	)
}