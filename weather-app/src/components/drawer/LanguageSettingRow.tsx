import { ReactElement, useState } from "react";
import styled from "styled-components";
import { Language } from "../../types/enums/Language";
import { Dropdown } from "../shared/dropdown/Dropdown";
import DropdownItem from "../shared/dropdown/DropdownItem";
import { useDispatch, useSelector } from "react-redux";
import { languageSelector } from "../../store/settings/settings.selector";
import { setLanguage } from "../../store/settings/settings.actions";
import i18n from "../../i18n";
import { getLanguageSymbol } from "../../utils/getLanguageSymbol";
import { t } from "i18next";

const LanguageSettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const TitleContainer = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const LanguageSettingRow = (): ReactElement => {
  const selectedLanguage = useSelector(languageSelector);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (language: Language) => {
    dispatch(setLanguage(language));
    i18n.changeLanguage(getLanguageSymbol(language));
    setOpen(false);
  };

  return (
    <LanguageSettingContainer>
      <TitleContainer>
        <Title>{t("drawer.language")}</Title>
      </TitleContainer>
      <Dropdown
        value={selectedLanguage}
        children={
          <>
            {Object.values(Language).map((language) => (
              <DropdownItem
                key={language}
                onClick={() => handleLanguageChange(language)}
              >
                {language}
              </DropdownItem>
            ))}
          </>
        }
        open={open}
        setOpen={setOpen}
      />
    </LanguageSettingContainer>
  );
};
