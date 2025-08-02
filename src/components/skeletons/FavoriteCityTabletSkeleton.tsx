import { X } from "lucide-react";

const FavoriteCityTabletSkeleton = () => {
    return (
        <div
            className="relative flex items-center gap-3 bg-card shadow-sm hover:shadow-md p-4 pr-8 border rounded-lg min-w-[260px] h-20 transition-all cursor-pointer">
            <div className="top-1.5 right-1.5 absolute">
                <X className="w-4 h-4 animate-pulse" />
            </div>
            <div className="flex items-center gap-3">
                <div className="relative bg-accent rounded-sm w-8 h-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite">
                    </div>
                </div>
                <div className="space-y-1.5">
                    <div className="relative bg-accent rounded-sm w-20 h-5 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                    </div>
                    <div className="relative bg-accent rounded-sm w-4 h-3 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                    </div>
                </div>
            </div>
            <div className="space-y-1.5 ml-auto">
                <div className="relative bg-accent ml-auto rounded-sm w-8 h-5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                </div>
                <div className="relative bg-accent rounded-sm w-12 h-3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted-foreground/20 to-accent animate-slide-infinite"></div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCityTabletSkeleton;