import { ClientComponent } from "../ClientComponent";
import { Post } from "../Post";

const ClientServerPage = () => {
  return (
    <main>
      <h1>Server Rendered Page</h1>
      <p>this page is rendered on the server and sent as html to the browser</p>
      <p>
        The post info below is an async server component that is nested inside
        &quot;&lt;ClientComponent /&gt;&quot;
      </p>
      <p>
        Anything that is imported into a file marked with
        &quot;use-cllient&quot; will be part of the client bundle, however, if
        you pass a component as a props to a client component, that passed
        component will remain as a server component
      </p>
      <p>
        Server components are basiclly a utility layer that has access to server
        resources (like env variables) and you can utilize that to prepare data
        on the server that will be serilized and sent to the &quot;react
        renderer&quot;. The react renderer (which runs on both the client-side
        i.e the browser AND the server (like your dev server)) renderes an
        inital html skeleton and sends it to the client if it is being run on
        the server and updates the dom if run on the client
      </p>
      <ClientComponent>
        <Post postNum={1} />
      </ClientComponent>
    </main>
  );
};

export default ClientServerPage;
