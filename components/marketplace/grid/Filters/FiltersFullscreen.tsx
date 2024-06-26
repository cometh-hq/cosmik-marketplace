import React, { useState } from "react"
import { ChevronDown, FilterIcon, XIcon } from "lucide-react"

import { CardFiltersRaw } from "@/types/assets"
import { useNFTFilters } from "@/lib/utils/nftFilters"
import { MarketplacePanelFilters } from "@/lib/utils/seed"
import { Button } from "@/components/ui/Button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/Command"

import { CheckboxFilter } from "./CheckboxFilter"
import { FiltersBadgeCounter } from "./FiltersBadgeCounter"
import { FiltersResetBtn } from "./FiltersResetBtn"

const FiltersFullscreen = ({
  attributeFilterOptions: filters,
}: {
  attributeFilterOptions: MarketplacePanelFilters
}) => {
  const { filtersCounter } = useNFTFilters()
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilters = () => setIsOpen(!isOpen)

  return (
    <>
      <Button
        variant="secondary"
        className="relative max-md:px-3"
        onClick={toggleFilters}
      >
        <FilterIcon size="16" className="md:mr-2" />
        <span className="max-md:hidden">Attributes filters</span>
        <FiltersBadgeCounter counter={filtersCounter} />
      </Button>
      {isOpen && (
        <div className="bg-primary fixed inset-0 z-50 p-4">
          <div className="flex h-full flex-col overflow-y-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">
                Filters{" "}
                <small>{filtersCounter > 0 && `(${filtersCounter})`}</small>
              </h2>
              <Button size="icon" variant="ghost" onClick={toggleFilters}>
                <XIcon size="24" />
              </Button>
            </div>
            <div className="mt-2 flex flex-col">
              {[...filters.entries()].map(([label, values]) => (
                <Collapsible className="border-b border-white/5 py-2">
                  <CollapsibleTrigger asChild>
                    <button className="flex w-full items-center pb-2 pr-2 text-base font-semibold">
                      {label}
                      <span className="ml-auto flex items-center gap-1">
                        {[...values.values].length}
                        <ChevronDown className="size-5" />
                      </span>
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <Command>
                      <CommandInput
                        placeholder="Search..."
                        className="rounded-md border"
                      />
                      <CommandList className="mt-1 max-h-fit">
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                          {[...values.values]
                            .sort((a, b) => a.localeCompare(b))
                            .map((value, index) => (
                              <CheckboxFilter
                                key={index}
                                label={value}
                                queryKey={label as keyof CardFiltersRaw}
                                queryValue={value}
                              />
                            ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
            <div className="mt-auto">
              <FiltersResetBtn />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FiltersFullscreen
