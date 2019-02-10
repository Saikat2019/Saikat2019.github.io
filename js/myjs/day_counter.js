$("#days-in-kgp").attr("data-to",no_of_days());
// to get no of days in kgp
function no_of_days() {
                        var d = new Date(),
                        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
                        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
                        ampm = d.getHours() >= 12 ? 'pm' : 'am',
                        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                        days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
                        var date2 = new Date("07/24/2017");//mm/dd/yyyy
                        var timeDiff = Math.abs(date2.getTime() - d.getTime());
                        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
                        return diffDays;
                        }
