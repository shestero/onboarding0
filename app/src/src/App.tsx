import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Dashboard } from "./Dashboard";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import { authProvider } from "./authProvider";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
 <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
   <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} />
   <Resource name="users" icon={UserIcon} list={UserList} recordRepresentation="name" />
 </Admin>
);

export default App;

