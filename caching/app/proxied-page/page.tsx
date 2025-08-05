const ProxiedPage = () => {
  return (
    <main>
      <h1>Proxied Page</h1>
      <p>
        This page will never get rendered and instead the `proxy` page will be
        rendered instead, however the url will remain `/proxied-page`
      </p>
    </main>
  );
};

export default ProxiedPage;
