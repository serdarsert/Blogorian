using System;
using System.Collections.Generic;

namespace Blogorian.Data
{
    public class DataRepository
    {
        public static List<Post> GenerateMockPostList()
        {
            List<Post> pList = new List<Post>();
            for (int i = 0; i < 30; i++)
            {
                pList.Add(new Post()
                {
                    Id = i + 1,
                    Title = "There are many variations of passages of Lorem Ipsum available",
                    PublishedDate = DateTime.Now.AddMonths(-(i + 1)),
                    ImageUrl = "images/ts" + (i % 3 == 0 ? 1 : (i % 3 == 1 ? 2 : 3)) + ".png",
                    Content = @"<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere odio in bibendum lacinia. Donec nec gravida elit, nec fermentum erat. Cras luctus pretium posuere. Duis lobortis et leo eu viverra. Aliquam quis dolor quis lacus varius accumsan. Vestibulum a quam erat. Integer mattis nulla ut elit euismod, nec bibendum lorem gravida. Vivamus eget lorem ut justo aliquet feugiat sed ac nunc. Maecenas a nisl tempus, mollis purus eget, posuere tellus. Phasellus consequat arcu non nulla accumsan, eu sollicitudin ante viverra. Cras imperdiet tellus sit amet lacus malesuada ultrices rutrum ac mi. Integer id purus rhoncus, rhoncus tellus et, finibus ligula. Mauris ac lectus vitae nulla sodales suscipit.
</p>
<p>
Nunc purus quam, tristique ut pellentesque quis, luctus vitae erat. Integer odio nisl, sagittis eget libero in, ultrices fringilla lorem. Phasellus at orci augue. Sed non augue lacus. Cras quis ligula vel tellus vehicula viverra at sed nisl. Cras venenatis odio eu euismod lacinia. Sed efficitur egestas lectus, vel euismod nulla.
</p>
<p>
Duis finibus nisi eu facilisis pellentesque. Praesent fermentum lectus neque, in tristique ex vulputate sollicitudin. Donec sed blandit nisl. Integer faucibus scelerisque dolor et porta. Suspendisse fringilla magna in libero congue, et bibendum felis efficitur. Duis gravida ultrices laoreet. Duis quis dui est. Etiam pharetra urna mauris, eu pellentesque dui cursus ac. Donec vestibulum ullamcorper sapien. Aliquam euismod dui eu laoreet aliquet. Vestibulum dignissim hendrerit orci, et sollicitudin mi convallis vitae.
</p>
<p>
Vivamus sed ornare augue. Donec nibh augue, ullamcorper et elit at, semper euismod risus. Donec in erat at mi dapibus viverra non nec nibh. Sed posuere sapien vel euismod porttitor. Duis commodo, mi vel imperdiet venenatis, leo nibh rhoncus eros, sed faucibus eros dolor eu tellus. Curabitur ac pellentesque diam, sed euismod diam. Duis tempor eget risus eu interdum. Quisque facilisis suscipit dolor eu tristique. Pellentesque maximus a augue id pellentesque. Sed sollicitudin ullamcorper dictum. Mauris ultricies nibh non fermentum facilisis. Vestibulum mauris odio, condimentum et urna ac, euismod interdum est. Suspendisse quis pretium leo.
</p>
<p>
Nulla facilisi. Duis sem ipsum, dapibus et auctor ut, blandit non eros. Cras felis urna, laoreet ac dictum sodales, dictum sit amet nisl. Nam sed pulvinar lectus, id ultrices dolor. Proin volutpat lacinia eros, et gravida erat bibendum id. Aliquam fermentum ipsum sed cursus commodo. Quisque consequat eget orci at laoreet. Aliquam ut commodo turpis, eu convallis ex. Phasellus nec vestibulum leo. Fusce eget enim tempor, vehicula ipsum vitae, convallis mauris. Curabitur faucibus placerat est eu finibus. Pellentesque sit amet ipsum ut nisi egestas rhoncus non id urna. In nunc magna, gravida vel tincidunt vel, egestas nec urna. Cras porttitor scelerisque augue et vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
</p>
<p>
Proin posuere consequat lorem vel luctus. Proin pulvinar maximus hendrerit. Mauris vitae aliquet felis, non dignissim eros. Pellentesque id felis ante. Cras laoreet a turpis quis tempus. Mauris non urna dignissim, interdum tellus et, pulvinar purus. Etiam at interdum magna, quis varius enim. Suspendisse at efficitur nulla. Sed turpis nisl, suscipit quis diam id, commodo efficitur enim. Maecenas hendrerit ante eu urna lobortis mattis in eu ligula. Nullam et pharetra massa. Fusce feugiat tincidunt posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec rutrum blandit lacus in hendrerit. Vivamus in sollicitudin justo.
</p>
<p>
Phasellus et dapibus purus. Nunc pulvinar, mauris vel convallis condimentum, sapien urna lobortis metus, ac lacinia nibh magna quis quam. In aliquam eleifend mauris, ac feugiat odio condimentum in. Praesent vehicula massa sed urna mattis, vitae lobortis nisl hendrerit. Donec porta euismod ultricies. Sed maximus aliquam lectus eu interdum. Sed eros nunc, fermentum vel massa sit amet, rhoncus mollis odio. Pellentesque sagittis, arcu nec tempus accumsan, erat dui tristique felis, sed bibendum dolor augue sit amet mi. Aliquam libero nibh, pellentesque et arcu a, rhoncus vehicula dui. Pellentesque nulla ipsum, ornare eu pharetra tempus, dapibus sed lectus. Ut convallis lorem vitae eleifend ultricies. Cras in lacus quis magna vehicula facilisis nec et magna. Fusce interdum, mauris sed cursus tristique, arcu tortor vehicula libero, aliquet condimentum mauris nunc sit amet justo.
</p>
<p>
Nulla faucibus eget eros quis ultricies. Mauris vulputate nibh et risus imperdiet, ut vehicula purus faucibus. Cras rutrum enim in risus bibendum porttitor. Suspendisse ac nisi at dui sagittis posuere. Pellentesque ullamcorper metus id ante sagittis ultricies. Vestibulum facilisis ultricies nibh, porttitor malesuada tortor sagittis sit amet. Donec pharetra maximus nunc, vel fringilla ligula fringilla vitae.
</p>
<p>
Nulla consectetur aliquam purus commodo luctus. Vivamus sit amet diam venenatis, vestibulum sem non, tristique libero. Nunc convallis nisi ac sem ultrices sollicitudin. Phasellus elementum nisl in libero pretium, et fermentum erat facilisis. Vivamus id nibh eu nisi vestibulum eleifend eget eget lacus. Curabitur dapibus odio a augue tempus, ut ultricies felis ultrices. Mauris ultricies faucibus diam, tincidunt aliquam nibh rhoncus sit amet. Phasellus est eros, suscipit quis nisi a, mollis congue lacus. Vivamus efficitur felis a placerat interdum. Fusce vestibulum eget odio sed tempor. Nullam a massa in mi lobortis tristique ut ac quam. Nullam eget neque mi. Ut magna arcu, hendrerit vitae tristique vitae, dapibus ut elit. Suspendisse sollicitudin sed mauris non consectetur. Nam ultricies tincidunt leo eu vulputate. Vivamus in tristique dui.
</p>
<p>
Aliquam sit amet laoreet ante. Pellentesque in porta ligula, venenatis facilisis leo. Maecenas quis purus sit amet metus dapibus dictum. In vel porta sapien. In nec ligula dignissim ante tempor gravida at ut ipsum. Nullam et interdum justo. Nullam augue nibh, faucibus interdum ante sit amet, mattis semper magna. Suspendisse eget gravida neque, auctor condimentum nisi. Vestibulum molestie convallis varius. Nunc vel dolor risus. Pellentesque tempor volutpat tincidunt. Duis vulputate erat eget ex ullamcorper dignissim.
</p>",
                    Tags = new List<string> { "security", "architecture", "typescript", "angular", "mobile" }
                });
            }
            return pList;
        }

        private static List<Post> posts;
        public static List<Post> Posts
        {
            get
            {
                if (posts == null)
                    posts = GenerateMockPostList();
                return posts;
            }
        }

        public static List<Route> Routes = new List<Route> {
        new Route("/", "/app/posts/list.html", "postsController", "vm"),
            new Route("/edit/:id", "/app/posts/edit.html", "postEditController", "vm"),
            new Route("/add", "/app/posts/add.html", "postAddController", "vm")
        };
    }
}