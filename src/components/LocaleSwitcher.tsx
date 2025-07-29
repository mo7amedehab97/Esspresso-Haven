"use client";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { Select } from "@base-ui-components/react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const locales = routing.locales.map(loc => ({
    label: t("locale", { locale: loc }),
    value: loc,
  }));

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    // <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
    //   {routing.locales.map(cur => (
    //     <option key={cur} value={cur}>
    //       {t("locale", { locale: cur })}
    //     </option>
    //   ))}
    // </LocaleSwitcherSelect>
    <Select.Root
      value={locale}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <Select.Trigger className="flex h-10 min-w-36 items-center justify-between gap-3 rounded-md border border-gray-200 pr-3 pl-3.5 select-none hover:bg-[#DCC6B2]/10 focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-[#4B2E2B] active:bg-[#DCC6B2] data-[popup-open]:bg-[#DCC6B2]/10">
        <Select.Value>{t("locale", { locale: locale })}</Select.Value>
        <Select.Icon className="flex">
          <ChevronsUpDownIcon className="size-4" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner className="outline-none z-[99]" sideOffset={8}>
          <Select.ScrollUpArrow className="top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]" />
          <Select.Popup className="group max-h-[var(--available-height)] origin-[var(--transform-origin)] overflow-y-auto rounded-md bg-[canvas] py-1 text-gray-900 shadow-lg shadow-gray-200 outline outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            {locales.map(({ label, value }) => (
              <Select.Item
                key={label}
                value={value}
                className="grid min-w-[var(--anchor-width)] cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-[#4B2E2B] data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-[#A47149]"
              >
                <Select.ItemIndicator className="col-start-1">
                  <CheckIcon className="size-3" />
                </Select.ItemIndicator>
                <Select.ItemText className="col-start-2">
                  {label}
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Popup>
          <Select.ScrollDownArrow className="bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]" />
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
