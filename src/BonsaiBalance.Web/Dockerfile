FROM mcr.microsoft.com/dotnet/runtime:5.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["BonsaiBalance.Web.csproj", "BonsaiBalance.Web/"]
RUN dotnet restore "BonsaiBalance.Web/BonsaiBalance.Web.csproj"
COPY . "BonsaiBalance.Web"
RUN apt-get update -yq && apt-get upgrade -yq && apt-get install -yq curl git --no-install-recommends
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -yq nodejs build-essential --no-install-recommends
RUN npm install -g npm
WORKDIR "/src/BonsaiBalance.Web"
RUN dotnet build "BonsaiBalance.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BonsaiBalance.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BonsaiBalance.Web.dll"]
