import {
  createContext,
  useContext,
  useState,
  useRef,
  type ReactNode,
} from "react";
import { type CharacterProps } from "../types/Characters";

interface CharacterContextType {
  characters: CharacterProps[];
  error: boolean;
  resetKey: number;
  currentPage: number;
  totalPages: number;
  loadCharacter: (characterName: string, status: string) => Promise<void>;
  goToPage: (page: number) => Promise<void>;
  resetSearch: () => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined,
);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [error, setError] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const lastSearchTerm = useRef("");
  const lastStatus = useRef("");

  const fetchCharacters = async (
    characterName: string,
    status: string,
    page: number,
  ) => {
    setError(false);
    
    const params = new URLSearchParams();
    if (characterName.trim()) params.set("name", characterName.trim());
    if (status) params.set("status", status);
    params.set("page", String(page));

    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?${params.toString()}`,
      );

      if (res.status === 404) {
        setCharacters([]);
        setTotalPages(1);
        setError(true);
        return;
      }

      const data = await res.json();
      setCharacters(data.results);
      setTotalPages(data.info.pages);
      setCurrentPage(page);
    } catch {
      setError(true);
    }
  };

  const loadCharacter = async (characterName: string, status: string) => {
    lastSearchTerm.current = characterName;
    lastStatus.current = status;
    await fetchCharacters(characterName, status, 1);
  };

  const goToPage = async (page: number) => {
    await fetchCharacters(lastSearchTerm.current, lastStatus.current, page);
  };

  const resetSearch = () => {
    setCharacters([]);
    setError(false);
    setCurrentPage(1);
    setTotalPages(1);
    lastSearchTerm.current = "";
    lastStatus.current = "";
    setResetKey((prev) => prev + 1);
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        error,
        resetKey,
        currentPage,
        totalPages,
        loadCharacter,
        goToPage,
        resetSearch,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error(
      "useCharacterContext deve ser usado dentro de um CharacterProvider",
    );
  }
  return context;
};
