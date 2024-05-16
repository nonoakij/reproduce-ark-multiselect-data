"use client"

import { Select, SelectRootProps } from "@ark-ui/react"
import { useState } from "react"

export function SelectRoot<
  T extends { label: string; value: string; disabled?: boolean } | string
>(args: Readonly<Omit<SelectRootProps<T>, "onValueChange">>) {
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const { name, ...props } = args
  return (
    <>
      <Select.Root
        {...props}
        onValueChange={(e) => {
          setSelectedItems(
            e.items.map((item) => {
              if (typeof item === "string") {
                return item
              }
              return item.value
            })
          )
        }}
      />
      <select
        multiple
        value={selectedItems}
        name={name}
        hidden
        // HACK: suppress React warning about controlled input
        onChange={() => {}}
      >
        {args.items.map((item) => {
          if (typeof item === "string") {
            return <option key={item}>{item}</option>
          }
          return (
            <option key={item.label} value={item.value}>
              {item.label}
            </option>
          )
        })}
      </select>
    </>
  )
}
