// !! this file ensures that when navigating from inside the modal itself to
// !! different route the state is not persisted ( the modal is kept open)
// !! instead it matches this file and returns the below;
// !! however this only works for the parent layout only
// !! if navigating to a different route, the [...catchAll] should be used
// !! to ensure the modal is closed

const ModalFallbackSlot = () => {
  return (
    <>
      <h1>Modal Fallback Slot</h1>
    </>
  );
};

export default ModalFallbackSlot;
