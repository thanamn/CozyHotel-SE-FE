export default function BookingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            {children}
        </div>
    );
}