import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";

const LectorPdf: React.FC = () => {
  const [pdfText, setPdfText] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Manejar de cambio de archivo
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setError(null);
    }
  };

  console.log("⭐⭐⭐⭐⭐", inputRef?.current?.value);

  // Manejar de envío del archivo al backend usando Axios
  const handleSubmit = async () => {
    if (!file) {
      setError("Por favor, selecciona un archivo PDF.");
      return;
    }

    setLoading(true);
    setError(null);

    const inputValue = inputRef?.current?.value || "";

    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("dataValue", inputValue);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/lectorPdf/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response?.status === 200) {
        setPdfText(response?.data?.line);
      } else {
        setError("Error al procesar el archivo.");
      }
    } catch (err: any) {
      console.error("Error:", err);
      setError(
        err?.response?.data?.message || "Ocurrió un error al enviar el archivo."
      );
    } finally {
      setLoading(false);
    }
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  console.log("❌❌❌❌", !!error);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 800,
          textAlign: "center",
          borderRadius: 3,
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          Lector de PDF
        </Typography>

        <Box sx={{ marginBottom: 3 }}>
          <TextField
            inputRef={inputRef}
            id="outlined-basic"
            label="Ingresa un texto"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
        </Box>

        <Box sx={{ marginBottom: 3 }}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            fullWidth
            disabled={!!loading}
            startIcon={<CloudUploadIcon />}
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
                transform: "scale(1.02)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Subir archivo
            <VisuallyHiddenInput
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              multiple
            />
          </Button>
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!file || loading}
          startIcon={loading ? <CircularProgress size={20} /> : null}
          sx={{
            marginBottom: 3,
            backgroundColor: "#4caf50",
            "&:hover": {
              backgroundColor: "#388e3c",
              transform: "scale(1.02)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {loading ? "Procesando..." : "Enviar PDF"}
        </Button>

        {error && (
          <Alert severity="error" sx={{ marginBottom: 3 }}>
            {error}
          </Alert>
        )}

        {pdfText && (
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              Texto extraído:
            </Typography>
            <Paper
              elevation={2}
              sx={{
                padding: 3,
                maxHeight: 400,
                overflowY: "auto",
                backgroundColor: "#f9f9f9",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
              }}
            >
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  fontFamily: "monospace",
                  fontSize: "0.9rem",
                  color: "#333",
                }}
              >
                {pdfText}
              </pre>
            </Paper>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default LectorPdf;
