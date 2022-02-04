FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["BonsaiBalance.Blazor/BonsaiBalance.Blazor.csproj", "BonsaiBalance.Blazor/"]
RUN dotnet restore "BonsaiBalance.Blazor/BonsaiBalance.Blazor.csproj"
COPY . .
WORKDIR "/src/BonsaiBalance.Blazor"
RUN dotnet build "BonsaiBalance.Blazor.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BonsaiBalance.Blazor.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BonsaiBalance.Blazor.dll"]
