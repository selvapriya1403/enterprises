import React, { useState, ChangeEvent, FormEvent } from "react";
import {
    Box,
    Card,
    CardContent,
    TextField,
    Typography,
    Button,
    Alert,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

interface AppointmentForm {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    reason: string;
}

const BookAppointment: React.FC = () => {
    const [formData, setFormData] = useState<AppointmentForm>({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        reason: "",
    });
    const [success, setSuccess] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Simple frontend validation
        if (!formData.name || !formData.email || !formData.date || !formData.time) {
            setError("Please fill in all required fields.");
            setSuccess("");
            return;
        }

        // Here you would normally send data to backend API
        console.log("Appointment Data:", formData);

        setSuccess("Appointment booked successfully!");
        setError("");

        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            reason: "",
        });
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mt: 5,
                px: 2,
            }}
        >
            <Card sx={{ maxWidth: 600, width: "100%", borderRadius: 3, boxShadow: 5 }}>
                <CardContent>
                    <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
                        Book Appointment
                    </Typography>

                    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                    {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            name="name"
                            fullWidth
                            margin="normal"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            fullWidth
                            margin="normal"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Phone"
                            name="phone"
                            type="tel"
                            fullWidth
                            margin="normal"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                            <TextField
                                label="Date"
                                name="date"
                                type="date"
                                sx={{ flex: 1, mt: 2 }}
                                InputLabelProps={{ shrink: true }}
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                label="Time"
                                name="time"
                                type="time"
                                sx={{ flex: 1, mt: 2 }}
                                InputLabelProps={{ shrink: true }}
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </Box>
                        <TextField
                            label="Reason / Description"
                            name="reason"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            value={formData.reason}
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
                            Submit
                        </Button>
                    </form>

                    {/* Call and Mail Buttons */}
                    <Box mt={3} display="flex" gap={2} justifyContent="center">
                        <Button
                            variant="outlined"
                            startIcon={<PhoneIcon />}
                            onClick={() => (window.location.href = "tel:+911234567890")}
                        >
                            Call Us
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<EmailIcon />}
                            onClick={() => (window.location.href = "mailto:info@skhenterprises.com")}
                        >
                            Mail Us
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default BookAppointment;
