import { useState, FormEvent, ChangeEvent } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
    Alert,
    Link,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/bg.jpg";

interface LoginForm {
    username: string;
    password: string;
}

interface LoginPageProps {
    onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
    const [formData, setFormData] = useState<LoginForm>({
        username: "",
        password: "",
    });
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // mobile if < md

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!formData.username || !formData.password) {
            setError("Please fill in all fields.");
            return;
        }

        // ✅ Check localStorage signup first
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (
                (formData.username === user.email || formData.username === user.name) &&
                formData.password === user.password
            ) {
                setError("");
                onLogin();
                navigate("/");
                return;
            }
        }

        // ✅ Fallback hardcoded admin login
        if (formData.username === "admin" && formData.password === "12345") {
            setError("");
            onLogin();
            navigate("/");
        } else {
            setError("Invalid username or password ❌");
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                minHeight: "100vh",
            }}
        >
            {/* Left side */}
            <Box
                sx={{
                    flex: { xs: "unset", md: 1 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #851d1dff, #211c1bff)",
                    color: "#fff",
                    p: { xs: 4, md: 8 },
                    textAlign: "center",
                }}
            >
                <img
                    src={Logo}
                    alt="Logo"
                    style={{
                        width: isMobile ? 120 : 180,
                        marginBottom: 24,
                    }}
                />
                <Typography
                    variant={isMobile ? "h4" : "h3"}
                    sx={{ fontWeight: "bold", lineHeight: 1.2 }}
                >
                    SKH Enterprises
                </Typography>
            </Box>

            {/* Right side */}
            <Box
                sx={{
                    flex: { xs: "unset", md: 1 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: { xs: 4, md: 8 },
                    backgroundColor: "#f5f5f5",
                }}
            >
                <Card sx={{ width: "100%", maxWidth: 400, borderRadius: 3, boxShadow: 5 }}>
                    <CardContent>
                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            sx={{ color: "#851d1dff", fontWeight: "bold" }}
                        >
                            Login
                        </Typography>

                        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Username or Email"
                                name="username"
                                fullWidth
                                margin="normal"
                                value={formData.username}
                                onChange={handleChange}
                            />

                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                fullWidth
                                margin="normal"
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 2,
                                    background: "linear-gradient(135deg, #851d1dff, #211c1bff)",
                                    fontWeight: "bold",
                                    "&:hover": {
                                        background: "linear-gradient(135deg, #6b1515, #171413)",
                                    },
                                }}
                            >
                                Login
                            </Button>
                        </form>

                        <Box textAlign="center" mt={2}>
                            <Link href="#" underline="hover" sx={{ color: "#851d1dff" }}>
                                Forgot Password?
                            </Link>
                            <Typography variant="body2" mt={1}>
                                Don’t have an account?{" "}
                                <Link
                                    component="button"
                                    underline="hover"
                                    sx={{ color: "#851d1dff" }}
                                    onClick={() => navigate("/signup")}
                                >
                                    Sign Up
                                </Link>
                            </Typography>

                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
