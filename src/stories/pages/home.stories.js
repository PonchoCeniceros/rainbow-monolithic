import Home from '../../pages/index';

const page = {
 component: Home,
 title: 'pages/Home'
}

export default page;
export const HomeComponent = args => <Home {...args}/>;

HomeComponent.args = {
 
};
