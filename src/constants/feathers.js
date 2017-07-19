import feathers from "feathers/client";
import hooks from "feathers-hooks";
import auth from "feathers-authentication-client";
import restClient from "feathers-rest/client";
import axios from "axios";

const App = feathers();

App.configure(hooks())
  .configure(restClient("http://localhost:3030").axios(axios))
  .configure(
    auth({
      strategy: "local",
      storage: window.localStorage
    })
  );

export default App;
