import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Fade,
  List,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface SearchDropdownProps {
  items: string[];
  placeholder?: string;
  onSelect: (item: string) => void;
  onSearch?: (search: string) => void;
}

export const SearchDropdown: React.FC<SearchDropdownProps> = ({
  items,
  placeholder = "Search...",
  onSelect,
  onSearch,
}) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [debounceTimeoutId, setDebounceTimeoutId] =
    useState<NodeJS.Timeout | null>(null);
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleSelect = (item: string) => {
    onSelect(item);
    setSearch(item);
    setIsOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);

    if (onSearch) {
      if (debounceTimeoutId) {
        clearTimeout(debounceTimeoutId);
      }

      const timeoutId = setTimeout(() => {
        onSearch(newSearch);
      }, 1000);

      setDebounceTimeoutId(timeoutId);
    }
  };

  React.useEffect(() => {
    return () => {
      if (debounceTimeoutId) {
        clearTimeout(debounceTimeoutId);
      }
    };
  }, [debounceTimeoutId]);

  return (
    <Box sx={{ position: "relative", width: "300px", margin: "0 auto" }}>
      <TextField
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        value={search}
        onChange={handleSearchChange}
        onFocus={handleOpen}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "8px",
            bgcolor: "#F8F8F8",
          },
        }}
      />
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", right: 8, top: 8 }}
      >
        <CloseIcon />
      </IconButton>

      {isOpen && (
        <Fade in={isOpen}>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              mt: 2,
            }}
          >
            <List
              sx={{
                maxHeight: "200px",
                overflowY: "auto",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#D1D1D1",
                  borderRadius: "3px",
                },
              }}
            >
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "8px 16px",
                      color: "#000000",
                      cursor: "pointer",
                      ":hover": { bgcolor: "#F0F0F0" },
                    }}
                    onClick={() => handleSelect(item)}
                  >
                    {item}
                  </ListItem>
                ))
              ) : (
                <Typography
                  sx={{ textAlign: "center", p: 2, color: "#A0A0A0" }}
                >
                  No results found
                </Typography>
              )}
            </List>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default SearchDropdown;
