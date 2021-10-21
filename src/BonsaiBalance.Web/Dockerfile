FROM mcr.microsoft.com/dotnet/runtime:5.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["BonsaiBalance.Web.csproj", "BonsaiBalance.Web/"]
RUN dotnet restore "BonsaiBalance.Web/BonsaiBalance.Web.csproj"
COPY . .
WORKDIR "/src/BonsaiBalance.Web"
RUN dotnet build "BonsaiBalance.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BonsaiBalance.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BonsaiBalance.Web.dll"]
