import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/main/home'
import Life from '../pages/main/lifeService'
import Shop from '../pages/main/shop'
import User from '../pages/main/user'
import BottomNav from '../component/bottomNav/index'
import City from '../pages/city'
import Main from '../pages/main'
import Search from '../pages/search'

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/city' component={City}></Route>
                <Route exact path='/search/:value' component={Search}></Route>
                <Main>
                    <BottomNav />
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/life' component={Life}></Route>
                        <Route path='/shop' component={Shop}></Route>
                        <Route path='/user' component={User}></Route>
                    </Switch>
                </Main>
            </Switch>
            <Main />
        </Router>
    )
}

export default AppRoute