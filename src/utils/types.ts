import { Locale } from "next-intl";
import { ReactNode } from "react";

export type ParamsProps = {
  params: Promise<{ locale: Locale }>;
};

export type ChildrenProps = {
  children: ReactNode;
};

export type Props = ParamsProps & ChildrenProps;
