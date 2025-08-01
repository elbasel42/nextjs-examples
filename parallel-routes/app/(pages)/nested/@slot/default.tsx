// !! If this file doesn't exist:
// !! hard refersh or hard navigation to/while-on `/nested/alpha` and `/nested/omega`
// !! will cause 404 if there is no `/nested/@slot/alpha/page.tsx` file
// !! or `/nested/@slot/omega/page.tsx` file respectively.

const DefaultSlot = () => {
  return (
    <>
      <h1>Default Slot</h1>
    </>
  );
};

export default DefaultSlot;
