if [ "$#" -ne 1 ] ; then
    echo "Number of arguments given: $#"
    echo "Amount of soup was not provided"
    exit 1
fi

date=$(date --date="-1 days ago" +"%d-%m-%Y")

soep="soep"
if [ "$1" -ne 1 ] ; then
    echo "meer dan een soepje besteld"
    soep="soepjes"
fi

curl -s --user 'api:key-919defb00cb143edcbd65006ccafbd94' \
    https://api.mailgun.net/v3/mail.lab9k.gent/messages \
    -F from='Postmaster <postmaster@mail.lab9k.gent>' \
    -F to="dhr.philips.p@gmail.com" \
    -F subject='Bestelling soep' \
    -F text=$'Beste,\nWij hadden graag '"$1 $soep"$' besteld voor morgen('"$date"$').\n\nMet vriendelijke groeten,\nLab9000'
