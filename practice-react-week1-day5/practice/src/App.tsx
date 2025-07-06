import './App.css'
import ButtonClickCounter from './Exercise1/ButtonClickCounter'
import SearchFilter from './Exercise10/SearchFilter'
import InputFieldTracker from './Exercise2/InputFieldTracker'
import ToggleButton from './Exercise3/ToggleSwitch'
import HoverHighLight from './Exercise4/HoverHighlight'
import FormSubmissionAlert from './Exercise5/FormSubmissionAlert'
import KeyPressDisplay from './Exercise6/KeyPressDisplay'
import DoubleClickMessage from './Exercise7/DoubleClickMessage'
import DropdownSelection from './Exercise8/DropdownSelection'
import CheckboxToggle from './Exercise9/CheckboxToggle'

function App() {

  return (
    <>
      <ButtonClickCounter />
      <InputFieldTracker />
      <ToggleButton />
      <HoverHighLight />
      <FormSubmissionAlert />
      <KeyPressDisplay />
      <DoubleClickMessage />
      <DropdownSelection />
      <CheckboxToggle />
      <SearchFilter />
    </>
  )
}

export default App
