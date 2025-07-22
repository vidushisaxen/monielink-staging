import React from "react";
import { CheckIcon, ChevronDown, ChevronsDown, ChevronsUpDown } from "lucide-react";
import PhoneNumberInput, { getCountryCallingCode } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const PhoneInput = React.forwardRef(({ className, onChange, value, ...props }, ref) => {
  return (
    <PhoneNumberInput
      ref={ref}
      className={cn("flex", className)}
      flagComponent={FlagComponent}
      countrySelectComponent={CountrySelect}
      inputComponent={InputComponent}
      smartCaret={false}
      value={value || undefined}
      onChange={(val) => onChange?.(val || "")}
      {...props}
    />
  );
});
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef(({ className, ...props }, ref) => (
  <>
  <div style={{clipPath:"polygon(66% 0, 98% 0, 100% 25%, 100% 100%, 2% 100%, 0 75%, 0 0);"}} className="relative w-full h-full overflow-hidden  phone-input">
      <input
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-[3.4vw] max-sm:h-[12vw] max-md:h-[10vw] w-full min-w-0 rounded-sm border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props} />
        </div>
  {/* <Input
    className={cn("rounded-sm  mobile:text-xl mobile:pb-4 tablet:pb-4", className)}
    ref={ref}
    {...props}
  /> */}
  </>
));
InputComponent.displayName = "InputComponent";

const CountrySelect = ({ disabled, value: selectedCountry, options: countryList, onChange }) => {
  const scrollAreaRef = React.useRef(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen} modal>
      <PopoverTrigger asChild className="">
        <Button
          type="button"
          variant="outline"
          className="flex justify-between h-[3.4vw] border shadow-none px-3 pb-2 mobile:pb-0 focus:z-10 bg-transparent max-md:h-[10vw] w-[15%] mr-[1.5vw] max-sm:hidden"
          disabled={disabled}
        >
          <FlagComponent country={selectedCountry} countryName={selectedCountry} />
          <ChevronDown
            className={cn(
              "-mr-2 size-4 opacity-50",
              disabled ? "hidden" : "opacity-100"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            value={searchValue}
            onValueChange={(val) => {
              setSearchValue(val);
              setTimeout(() => {
                const viewport = scrollAreaRef.current?.querySelector(
                  "[data-radix-scroll-area-viewport]"
                );
                if (viewport) viewport.scrollTop = 0;
              }, 0);
            }}
            placeholder="Search country..."
          />
          <CommandList>
            <ScrollArea data-lenis-prevent ref={scrollAreaRef} className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList.map((entry) => {
                  const { value: country, label: countryName } = entry;
                  if (!country) return null;
                  return (
                    <CommandItem
                      key={country}
                      className="gap-2"
                      onSelect={() => {
                        onChange(country);
                        setIsOpen(false);
                      }}
                    >
                      <FlagComponent country={country} countryName={countryName} />
                      <span className="flex-1 text-sm text-black">{countryName}</span>
                      <span className="text-sm text-black">
                        +{getCountryCallingCode(country)}
                      </span>
                      <CheckIcon
                        className={`ml-auto size-4 ${
                          country === selectedCountry ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country];
  return (
    <span className="flex h-6 w-8 overflow-hidden  bg-foreground/20 [&_svg:not([class*='size-'])]:size-full">
      {Flag ? <Flag title={countryName} /> : null}
    </span>
  );
};

export { PhoneInput };
