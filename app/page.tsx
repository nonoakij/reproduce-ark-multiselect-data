import { Select, Portal } from "@ark-ui/react"
import { SelectRoot } from "./multiselect"

export default function Home() {
  const items = [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte", disabled: true },
  ]
  return (
    <form
      action={async (formData) => {
        "use server"
        const selectedValue = formData.getAll("framework") // expected to be string[] but is undefined
        console.log("=====================")
        console.log(selectedValue)
        console.log("=====================")
      }}
    >
      <SelectRoot items={items} multiple name="framework">
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
          </Select.Trigger>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content style={{ background: "black", color: "white" }}>
              <Select.ItemGroup id="framework">
                <Select.ItemGroupLabel htmlFor="framework">
                  Frameworks
                </Select.ItemGroupLabel>
                {items.map((item) => (
                  <Select.Item
                    key={item.value}
                    item={item}
                    style={{ display: "flex", border: "1px solid black" }}
                  >
                    <Select.ItemText>{item.label}</Select.ItemText>
                    <Select.ItemIndicator>✓</Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </SelectRoot>
      <button>submit</button>
    </form>
  )
}
