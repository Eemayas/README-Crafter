import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
import React from "react";
import SectionHeader from "./SectionHeader";
import ActionButton from "@/components/ActionButton";
import MarkDownEditor from "@/components/MarkDownEditor";

interface ISectionLayoutProps {
  sectionHeaderMainText: string;
  sectionHeaderSubText?: string;
  sectionHeaderClassName?: string;
  actionButtonText?: string;
  actionButtonOnClick: () => void;
  markdownEditorValue: string;
  markdownEditorOnChange: (value: string) => void;
  markdownClassName?: string;
  children?: React.ReactNode;
}

const SectionLayout: React.FC<ISectionLayoutProps> = ({
  sectionHeaderMainText,
  sectionHeaderSubText,
  sectionHeaderClassName,
  actionButtonText,
  actionButtonOnClick,
  markdownEditorValue,
  markdownEditorOnChange,
  markdownClassName,
  children,
}) => {
  return (
    <MoveUpFadeAnimation>
      <section>
        <SectionHeader
          className={sectionHeaderClassName}
          text={sectionHeaderMainText}
          subtext={sectionHeaderSubText}
        />
        {children && <div className="w-full">{children}</div>}
        { actionButtonText ? (
          <div className="mt-10 flex w-full justify-center px-20">
            <ActionButton
              onClick={actionButtonOnClick}
              text={actionButtonText || ""}
            />
          </div>
        ) : null}
        <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700" />
        <MarkDownEditor
          value={markdownEditorValue}
          visible={true}
          className={markdownClassName}
          onChange={markdownEditorOnChange}
        />
      </section>
    </MoveUpFadeAnimation>
  );
};

export default SectionLayout;
